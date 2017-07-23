<?php

namespace CalculatorBundle\Entity;
class Calculator
{
    /**
     * @var float
     */
    private $leftOperand;

    /**
     * @var float
     */
    private $rightOperand;

    /**
     * @var string
     */
    private $operator;

    // getter method for leftOperand

    /**
     * Get left operand
     *
     * @return float
     */
    public function getLeftOperand()
    {
        return $this->leftOperand;
    }

    //setter method for leftOperand

    /**
     * Set left operand
     *
     * @param float $operand
     *
     * @return Calculator
     */
    public function setLeftOperand($operand)
    {
        $this->leftOperand = $operand;

        return $this;
    }

    // getter method for rightOperand

    /**
     * Get right operand
     *
     * @return float
     */
    public function getRightOperand()
    {
        return $this->rightOperand;
    }

    // setter method for rightOperand

    /**
     * Set right operand
     *
     * @param float $operand
     *
     * @return Calculator
     */
    public function setRightOperand($operand)
    {
        $this->rightOperand = $operand;

        return $this;
    }


    // getter method for operator

    /**
     * Get operator
     *
     * @return float
     */
    public function getOperator()
    {
        return $this->operator;
    }

//setter method for operator

    /**
     * Set operator
     *
     * @param string $operator
     *
     * @return Calculator
     */
    public function setOperator($operator)
    {

        $this->operator = $operator;

        return $this;
    }
}

