---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWMHV MHV 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWMHV MHV{:/}
 tag | {::nomarkdown}MHV{:/}
 routine | [ORWMHV](http://code.osehra.org/dox/Routine_ORWMHV_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns "MHV" if patient has My HealtheVet data
 Input Parameters | {::nomarkdown}ORDFN{:/}
 Lines | ```
 N I,ORX
 S ORY=0
 D TFL^VAFCTFU1(.ORX,ORDFN)       ; DBIA #2990
 S I=0 F  S I=$O(ORX(I)) Q:'I  D
 .;pt has MHV treat fac (200MH) and event reason wasn't "discharge" (3):
 .I $P(ORX(I),U)="200MH",$P(ORX(I),U,4)'=3 D
 ..S $P(ORY,U)="MHV",$P(ORY,U,2)="Patient has data in My HealtheVet"
```
 Leading comment lines | {::nomarkdown}Ouput Variable<br/>ORY = 0      if patient does not have My HealtheVet (MHV) data<br/>= "MHV"  if patient does have My HealtheVet data   {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} |  |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am