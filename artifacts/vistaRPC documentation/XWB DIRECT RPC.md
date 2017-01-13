---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB DIRECT RPC 

 property | value 
--- | --- 
 label | {::nomarkdown}XWB DIRECT RPC{:/}
 tag | {::nomarkdown}DIRECT{:/}
 routine | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} This is the Broker RPC that is called to request that a RPC be run on aremote system.  The data is passed by HL7 to the remote system as is thereturn value.  The difference between this and the XWB REMOTE RPC is thisis a blocking call meaning the user's workstation will not processanything else until the data returns from the remote system.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Call a remote RPC


### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Institution's station # to send the RPC to.{:/} | 
| {::nomarkdown}RRPC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the remote RPC to be run.{:/} | 




 Generated on January 13th 2017, 6:15:57 am