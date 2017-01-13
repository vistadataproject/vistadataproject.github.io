---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV UPDATE PCE DX 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV UPDATE PCE DX{:/}
 tag | {::nomarkdown}UDX{:/}
 routine | [DENTVTPF](http://code.osehra.org/dox/Routine_DENTVTPF_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Updates the PCE Visit to set the Primary Diagnosis and/or Primary Provider if they are no longer defined because of deleting procedures.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains a list with the PCE Visit and Primary Dx and/or Provider defined:DATA(1)=visit ien^visit dateDATA(n)=1^\POV\^dx ien^dx external^^descDATA(n)=1^\PRV\^provider ien(file 200)^provider name{:/} | 




 Generated on January 13th 2017, 6:24:32 am