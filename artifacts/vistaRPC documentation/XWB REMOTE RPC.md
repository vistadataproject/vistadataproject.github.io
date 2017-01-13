---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB REMOTE RPC 

 property | value 
--- | --- 
 label | {::nomarkdown}XWB REMOTE RPC{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This is the RPC that is called to request that an application RPCbe run on a remote system.  The data is passed by HL7 to the remote systemas is the return value.   This RPC will return a HANDLE that can be used to check if the data hasbeen sent back from the remote system.  The HANDLE can be used in anotherRPC to check the status of the RPC.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Call a remote RPC
 Leading comment lines | {::nomarkdown}with 1-10 parameters.<br/>(This reworked EN1 emtry point replaces the original EN1 entry point,<br/>which was renamed OLDEN1.){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Institution's station # to send the RPC to.{:/} | 
| {::nomarkdown}RRPC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the remote RPC to be run.{:/} | 
| {::nomarkdown}IP1{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the first input parameter to the remote RPC.{:/} | 
| {::nomarkdown}IP2{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the second input parameter to the remote RPC.{:/} | 




 Generated on January 13th 2017, 6:24:32 am