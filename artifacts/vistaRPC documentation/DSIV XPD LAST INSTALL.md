---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPD LAST INSTALL 

 property | value 
--- | --- 
 label | DSIV XPD LAST INSTALL
 tag | RLAST
 routine | [DSIVXPDU](http://code.osehra.org/dox/Routine_DSIVXPDU_source.html)
 return value type | SINGLE VALUE
 description | This returns the latest installed version of a KIDS build.  It gets thedata from the INSTALL file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PKG | LITERAL | 50 | true | This is the name (.01 field value) from the INSTALL file. The VA naming convention for KIDS builds:  <name><space><version> for a whole package  name*version*patch for a patch PKG can be the full name KIDS BUILD file name, or it can just be the nameportion of the KIDS BUILD file name | 