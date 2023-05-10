#!/bin/bash
c=1000
while [ $c -gt  0 ]; do
	tar -xvf $c.tar
    rm $c.tar
	c=`expr $c - 1`
done