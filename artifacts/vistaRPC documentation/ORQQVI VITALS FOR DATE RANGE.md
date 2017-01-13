---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI VITALS FOR DATE RANGE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI VITALS FOR DATE RANGE{:/}
 tag | {::nomarkdown}VITALS{:/}
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a patient's vital measurements between start date and stop date.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return patient's vital measurements taken between start date/time and end date/time
 Input Parameters | {::nomarkdown}DFN<br/>ORSDT<br/>OREDT{:/}
 Lines | ```
 K ^UTILITY($J,"GMRVD")
 S GMRVSTR="BP;HT;WT;T;R;P;PN" ;dee 2/12/99 added PN
 S GMRVSTR(0)=ORSDT_"^"_OREDT_"^"_"^"
 D EN1^GMRVUT0
 N ORT,ORD,ORI,I
 S ORT="",ORD=0,ORI=0,I=0
 F  S ORT=$O(^UTILITY($J,"GMRVD",ORT)) Q:ORT=""  D
 .F  S ORD=$O(^UTILITY($J,"GMRVD",ORT,ORD)) Q:ORD<1  D
 ..F  S ORI=$O(^UTILITY($J,"GMRVD",ORT,ORD,ORI)) Q:ORI<1  D
 ...S I=I+1
 ...S ORY(I)=ORI_"^"_ORT_"^"_$P(^UTILITY($J,"GMRVD",ORT,ORD,ORI),"^",8)_"^"_$P(^(ORI),"^")
 I I=0 S ORY(1)="^No vitals found."
 K GMRVSTR```
 Leading comment lines | {::nomarkdown}ORY: return variable, results are returned in the format:<br/>vital measurement ien^vital type^date/time taken^rate<br/>DFN: patient identifier from Patient File [#2]<br/>ORSDT: start date/time in Fileman format<br/>OREDT: end date/time in Fileman format<br/>DBIA for PXRMINDX(120.5 is 4290<br/>DBIA for ^GMVPXRM is 3647<br/>DBIA for ^GMRVUT0 is 1446{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient id (DFN) from Patient File (#2).{:/} | 
| {::nomarkdown}START DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Start date/time for vital retrieval in Fileman format.{:/} | 
| {::nomarkdown}STOP DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Stop date/time for vital retrieval in Fileman format.{:/} | 




 Generated on January 13th 2017, 6:55:29 am