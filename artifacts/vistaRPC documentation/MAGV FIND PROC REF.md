---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV FIND PROC REF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV FIND PROC REF{:/}
 tag | {::nomarkdown}FINDPROC{:/}
 routine | [MAGVRS07](http://code.osehra.org/dox/Routine_MAGVRS07_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure allows searching for a procedure reference based upon a fixed scalar value for one or more of its attributes.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROCATTS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}300{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point FINDPROC^MAGVRS07.  The first argument should bean array name (passed by reference) that will contain the returned value. The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGING PROCEDURE REFERENCE File(#2005.61) and <value> is the value to which the record's attributeshould be equal.  If multiple values are passed in, they will be ANDed.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}