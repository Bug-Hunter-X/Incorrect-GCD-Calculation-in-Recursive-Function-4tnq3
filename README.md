# Incorrect GCD Calculation in Recursive Function

This repository demonstrates a bug in a JavaScript function designed to calculate the greatest common divisor (GCD) of two numbers using Euclid's algorithm. The function incorrectly handles certain input pairs, leading to an infinite recursion and incorrect results. 

## Bug Description

The `foo` function attempts to recursively compute the GCD. However, it contains a flaw which leads to infinite recursion for certain inputs. Specifically, if the difference between `a` and `b` is not coprime with the smaller of the two numbers, the recursion will never reach the base case.  This results in a stack overflow error or an infinite loop, depending on the JavaScript engine.