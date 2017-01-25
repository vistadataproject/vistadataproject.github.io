---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS PKI GET UPN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS PKI GET UPN{:/}
 tag | {::nomarkdown}GETUPN{:/}
 routine | [XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC gets the SUBJECT ALTERNATIVE NAME field from the New Person (#200) file field 501.2.  It is used to check that the correct PIV card has been put into the reader.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETUPN^[XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
 Method comment | Get SUBJECT ALTERNATIVE NAME for PIV card check. -p580
 Code | {::nomarkdown}  S RET=$P($G(^VA(200,DUZ,501)),U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fFrame.pas">fFrame.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}