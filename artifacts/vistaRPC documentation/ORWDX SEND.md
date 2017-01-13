---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX SEND 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX SEND{:/}
 tag | {::nomarkdown}SEND{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to sign a list of orders with input as follows:        DFN=Patient        ORNP=Provider        ORL=Location        ES=Encrypted ES code         ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Sign
 Input Parameters | {::nomarkdown}DFN<br/>ORNP<br/>ORL<br/>ES<br/>ORWREC{:/}
 Leading comment lines | {::nomarkdown}DFN=Patient, ORNP=Provider, ORL=Location, ES=Encrypted ES code<br/>ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order{:/}




 Generated on January 13th 2017, 6:55:29 am