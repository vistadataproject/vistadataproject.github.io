---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS1 REFILL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS1 REFILL{:/}
 tag | {::nomarkdown}REFILL{:/}
 routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC to submit a request for a refill.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REFILL^[ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 Method comment | Refill Request
 Input parameters | {::nomarkdown}ORDERID, REFLOC, ORVP, ORNP, ORL{:/}
 Code | {::nomarkdown}  S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br> D REF^ORMBLDPS(ORDERID,REFLOC)<br> S Y=""<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}