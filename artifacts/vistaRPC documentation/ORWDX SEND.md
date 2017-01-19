---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX SEND 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX SEND{:/}
 tag | {::nomarkdown}SEND{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to sign a list of orders with input as follows:        DFN=Patient        ORNP=Provider        ORL=Location        ES=Encrypted ES code         ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SEND^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Sign
 First comment | {::nomarkdown}<pre> DFN=Patient, ORNP=Provider, ORL=Location, ES=Encrypted ES code<br/> ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order</pre>{:/}
 Input parameters | {::nomarkdown}DFN<br>ORNP<br>ORL<br>ES<br>ORWREC{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}