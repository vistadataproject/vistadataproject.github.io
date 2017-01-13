---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS1 REFILL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS1 REFILL{:/}
 tag | {::nomarkdown}REFILL{:/}
 routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC to submit a request for a refill.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Refill Request
 Input Parameters | {::nomarkdown}ORDERID<br/>REFLOC<br/>ORVP<br/>ORNP<br/>ORL{:/}
 Lines | {::nomarkdown} S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br/> D REF^ORMBLDPS(ORDERID,REFLOC)<br/> S Y=""<br/>{:/}




 Generated on January 13th 2017, 7:15:27 am