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
 First comment | {::nomarkdown} DFN=Patient, ORNP=Provider, ORL=Location, ES=Encrypted ES code<br/> ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order{:/}
 Input parameters | {::nomarkdown}DFN<br>ORNP<br>ORL<br>ES<br>ORWREC{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}