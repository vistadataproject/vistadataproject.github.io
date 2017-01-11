---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPD LAST INSTALL 

 property | value 
--- | --- 
 label | DSIC XPD LAST INSTALL
 tag | RLAST
 routine | [DSICXPDU](http://code.osehra.org/dox/Routine_DSICXPDU_source.html)
 return value type | SINGLE VALUE
 description | This returns the latest installed version of a KIDS build.  It gets the data from the INSTALL file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PKG | LITERAL | 50 | true | This is the name (.01 field value) from the INSTALL file. The VA naming convention for KIDS builds:  <name><space><version> for a whole package  name*version*patch for a patch PKG can be the full name KIDS BUILD file name, or it can just be the name portion of the KIDS BUILD file name | 




 Generated on January 11th 2017, 7:15:04 am