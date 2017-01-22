---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI VITALS FOR DATE RANGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI VITALS FOR DATE RANGE{:/}
 tag | {::nomarkdown}VITALS{:/}
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a patient's vital measurements between start date and stop date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient id (DFN) from Patient File (#2).{:/} | 
| {::nomarkdown}START DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Start date/time for vital retrieval in Fileman format.{:/} | 
| {::nomarkdown}STOP DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Stop date/time for vital retrieval in Fileman format.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VITALS^[ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 Method comment | return patient's vital measurements taken between start date/time and end date/time
 Input parameters | {::nomarkdown}DFN, ORSDT, OREDT{:/}
 First comment | {::nomarkdown}<pre>ORY: return variable, results are returned in the format:<br/>     vital measurement ien^vital type^date/time taken^rate<br/>DFN: patient identifier from Patient File [#2]<br/>ORSDT: start date/time in Fileman format<br/>OREDT: end date/time in Fileman format<br/>DBIA for PXRMINDX(120.5 is 4290<br/>DBIA for ^GMVPXRM is 3647<br/>DBIA for ^GMRVUT0 is 1446</pre>{:/}
 Code | {::nomarkdown}  K ^UTILITY($J,"GMRVD")<br> S GMRVSTR="BP;HT;WT;T;R;P;PN" ;dee 2/12/99 added PN<br> S GMRVSTR(0)=ORSDT_"^"_OREDT_"^"_"^"<br> D EN1^GMRVUT0<br> N ORT,ORD,ORI,I<br> S ORT="",ORD=0,ORI=0,I=0<br> F  S ORT=$O(^UTILITY($J,"GMRVD",ORT)) Q:ORT=""  D<br> .F  S ORD=$O(^UTILITY($J,"GMRVD",ORT,ORD)) Q:ORD<1  D<br> ..F  S ORI=$O(^UTILITY($J,"GMRVD",ORT,ORD,ORI)) Q:ORI<1  D<br> ...S I=I+1<br> ...S ORY(I)=ORI_"^"_ORT_"^"_$P(^UTILITY($J,"GMRVD",ORT,ORD,ORI),"^",8)_"^"_$P(^(ORI),"^")<br> I I=0 S ORY(1)="^No vitals found."<br> K GMRVSTR{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}