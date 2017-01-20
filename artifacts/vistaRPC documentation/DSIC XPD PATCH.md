---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC XPD PATCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XPD PATCH{:/}
 tag | {::nomarkdown}PATCH{:/}
 routine | [DSICXPDU](http://code.osehra.org/dox/Routine_DSICXPDU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This invokes the Kernel API to determine if a patch has been installed or not.  As such, it requires that the application has an associated PACKAGE file entry.  This will not work for VEJD applications, but will work forDSI applications.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PKG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the patch, e.g., LR*5.2*98.  This invokes the Kernel API.  As such it expects a PACKAGE file entry whose PREFIX field value is equal to the first '*' piece of the inputted patch name (e.g, LR).  This will work for DSI applications, but not for VEJD.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}