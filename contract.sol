// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface IBEP20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the token decimals.
     */
    function decimals() external view returns (uint8);

    /**
     * @dev Returns the token symbol.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the token name.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the bep token owner.
     */
    function getOwner() external view returns (address);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `recipient`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address _owner, address spender)
        external
        view
        returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `sender` to `recipient` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract MyContract is Ownable, Pausable {
    using SafeMath for uint256;
    using SafeERC20 for IBEP20;

    // Struct for payments
    struct Payment {
        address subscriber; // User who subscribe
        uint256 subscriptonDate; // Who made the payment
        uint256 subscriptionperiod; // When the last payment was made
        uint256 expirydate; // When the user needs to pay again
    }
    // Array of payments
    Payment[] public payments;

    mapping(address => Payment) public userPayment;

    // Access variable
    IBEP20 public immutable receiveTokenForPayment;

    uint256 private SubscriptionFeeForOneMonth = 0.1 ether;
    uint256 private SubscriptionFeeForOneYear = 0.2 ether;

    constructor() {
        receiveTokenForPayment = IBEP20(
            0x337610d27c682E347C9cD60BD4b3b107C9d34dDd
        );
    }

    receive() external payable onlyOwner {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function Subscription(uint256 _amount, uint256 _noOfDays) public whenNotPaused {
        require(
            (_noOfDays == 1 && _amount == SubscriptionFeeForOneMonth) ||
                (_noOfDays == 2 && _amount == SubscriptionFeeForOneYear),
            "Days and Amount not match"
        );
        Payment memory newPayment;
        if (_noOfDays == 1) {
            require(
                receiveTokenForPayment.allowance(msg.sender, address(this)) >=
                    SubscriptionFeeForOneMonth,
                "Less Allowance to this contract"
            );
            receiveTokenForPayment.transferFrom(msg.sender, owner(), _amount);
            newPayment = Payment(
                msg.sender,
                block.timestamp,
                30,
                block.timestamp + 30 days
            );
        }

        if (_noOfDays == 2) {
            require(
                receiveTokenForPayment.allowance(msg.sender, address(this)) >=
                    SubscriptionFeeForOneYear,
                "Less Allowance to this contract"
            );
            receiveTokenForPayment.transferFrom(msg.sender, owner(), _amount);
            newPayment = Payment(
                msg.sender,
                block.timestamp,
                365,
                block.timestamp + 365 days
            );
        }

        payments.push(newPayment);
        userPayment[msg.sender] = newPayment;
    }

    function UnSubscription() public {
        Payment memory newPayment;
        newPayment = Payment(
                msg.sender,
                0,
                0,
                0
            );
        payments.push(newPayment);
        userPayment[msg.sender] = newPayment;
    }

    function priceChange(uint256 newOneMonthPrice, uint256 newOneYearPrice) public onlyOwner {
        SubscriptionFeeForOneMonth = newOneMonthPrice;
        SubscriptionFeeForOneYear = newOneYearPrice;
    }

    function checkExpiryDate(address _subscriber) public view returns(uint256) {
        return userPayment[_subscriber].expirydate;
    }

    function checkSubscription2(address _subscriber) public view returns(Payment memory) {
        return userPayment[_subscriber];
    }

    function MonthSubscribyionFee() public view returns(uint256)  {
        return SubscriptionFeeForOneMonth;
    }

    function YearSubscribyionFee() public view returns(uint256)  {
        return SubscriptionFeeForOneYear;
    }
}
