---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV XPD LAST INSTALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPD LAST INSTALL{:/}
 tag | {::nomarkdown}RLAST{:/}
 routine | [DSIVXPDU](http://code.osehra.org/dox/Routine_DSIVXPDU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This returns the latest installed version of a KIDS build.  It gets thedata from the INSTALL file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PKG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name (.01 field value) from the INSTALL file. The VA naming convention for KIDS builds:  <name><space><version> for a whole package  name*version*patch for a patch PKG can be the full name KIDS BUILD file name, or it can just be the nameportion of the KIDS BUILD file name{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}