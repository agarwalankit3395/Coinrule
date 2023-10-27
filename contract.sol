// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract CryptoArbitrage is Ownable, Pausable {
    using SafeMath for uint256;

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

    uint256 private SubscriptionFeeForOneMonth = 1 ether;
    uint256 private SubscriptionFeeForOneYear = 2 ether;

    event Received(address, uint256);

    constructor() {}

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function Subscription(uint256 _noOfDays) public payable whenNotPaused {
        require(_noOfDays == 1 || _noOfDays == 2, "Days and Amount not match");
        require(userPayment[msg.sender].subscriber != msg.sender, "User is already a subscriber");
        require(block.timestamp >= userPayment[msg.sender].expirydate , "Still a subscriber");
         Payment memory newPayment;

        if (_noOfDays == 1) {

            (bool success, ) = owner().call{value: SubscriptionFeeForOneMonth}(
                ""
            );
            require(success, "Less BNB has been send");

            newPayment = Payment(
                msg.sender,
                block.timestamp,
                30,
                block.timestamp + 30 days
            );
        }

        if (_noOfDays == 2) {
            (bool success, ) = owner().call{value: SubscriptionFeeForOneYear}(
                ""
            );
            require(success, "Less BNB has been send");

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

    function priceChange(uint256 newOneMonthPrice, uint256 newOneYearPrice)
        public
        onlyOwner
    {
        SubscriptionFeeForOneMonth = newOneMonthPrice;
        SubscriptionFeeForOneYear = newOneYearPrice;
    }

    function checkExpiryDate(address _subscriber)
        public
        view
        returns (uint256)
    {
        return userPayment[_subscriber].expirydate;
    }

    function checkSubscription2(address _subscriber)
        public
        view
        returns (Payment memory)
    {
        return userPayment[_subscriber];
    }

    function MonthSubscribyionFee() public view returns (uint256) {
        return SubscriptionFeeForOneMonth;
    }

    function YearSubscribyionFee() public view returns (uint256) {
        return SubscriptionFeeForOneYear;
    }

     // Function to withdraw all Ether from this contract.
    function withdraw() public {
        // get the amount of Ether stored in this contract
        uint amount = address(this).balance;

        // send all Ether to owner
        (bool success, ) = owner().call{value: amount}("");
        require(success, "Failed to send Ether");
    }
}
