---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDX SEND 

 property | value 
--- | --- 
 label | ORWDX SEND
 tag | SEND
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | ARRAY
 description | RPC to sign a list of orders with input as follows:        DFN=Patient        ORNP=Provider        ORL=Location        ES=Encrypted ES code         ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order


### Method description

 property | value 
--- | --- 
 Method comment | Sign
 Leading comment lines | DFN=Patient, ORNP=Provider, ORL=Location, ES=Encrypted ES code,ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order