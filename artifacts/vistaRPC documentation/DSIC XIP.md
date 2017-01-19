---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC XIP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XIP{:/}
 tag | {::nomarkdown}ZIPCODE{:/}
 routine | [DSICXIP](http://code.osehra.org/dox/Routine_DSICXIP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This returns address demographics for a 5 or 9 digit zip codeThe return value is for the primary location associated with the ZIP code. if an error:  -1 ^ ERROR MESSAGE if OK:   Input ZIP code ^ city ^ state ^ county ^ FIPS county code the return is for the primary location associated with the ZIP code.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ZIPCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}5 OR 9 DIGIT ZIP CODE{:/} | 
| {::nomarkdown}ACTDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Active date in internal Fileman format.  If this parameter is passed, then only return zip code demographics for ones which were active as of the inputted date. If it is not passed, then return zip code info regardless of active status.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}