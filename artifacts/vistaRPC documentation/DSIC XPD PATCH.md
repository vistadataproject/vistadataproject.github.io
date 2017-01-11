---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPD PATCH 

 property | value 
--- | --- 
 label | DSIC XPD PATCH
 tag | PATCH
 routine | [DSICXPDU](http://code.osehra.org/dox/Routine_DSICXPDU_source.html)
 return value type | SINGLE VALUE
 description | This invokes the Kernel API to determine if a patch has been installed or not.  As such, it requires that the application has an associated PACKAGE file entry.  This will not work for VEJD applications, but will work forDSI applications.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PKG | LITERAL | 50 | true | This is the name of the patch, e.g., LR*5.2*98.  This invokes the Kernel API.  As such it expects a PACKAGE file entry whose PREFIX field value is equal to the first '*' piece of the inputted patch name (e.g, LR).  This will work for DSI applications, but not for VEJD. | 




 ###### Generated on January 11th 2017, 6:39:43 am