---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE AUTO VISIT TYPE SELECT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE AUTO VISIT TYPE SELECT{:/}
 tag | {::nomarkdown}AUTOVSIT{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if visit type should be automatically selected.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns TRUE if automatic selection of Visit Type
 Input Parameters | {::nomarkdown}LOC{:/}
 Lines | {::nomarkdown} N SRV<br/> S SRV=$P($G(^VA(200,DUZ,5)),U)<br/> S ORY=$$GET^XPAR(DUZ_";VA(200,^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS","ORWPCE DISABLE AUTO VISIT TYPE",1,"Q")<br/> I +ORY S ORY=1<br/> S ORY='ORY{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Location.{:/} | 




 Generated on January 13th 2017, 7:15:28 am