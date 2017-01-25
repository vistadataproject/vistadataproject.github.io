---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV ALLERGY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV ALLERGY{:/}
 tag | {::nomarkdown}ALLERGY{:/}
 routine | [GMVUTL3](http://code.osehra.org/dox/Routine_GMVUTL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call retrieves the patient's allergy information. This remote procedure call is documented in Integration Agreement 4350.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN is a pointer to the PATIENT file (#2).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ALLERGY^[GMVUTL3](http://code.osehra.org/dox/Routine_GMVUTL3_source.html)
 Method comment | GMV ALLERGY [RPC entry point]
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N GMRAL,GMVALG,GN D EN1^GMRADPT M GMVALG=GMRAL<br> I $O(GMVALG(0))'>0 D  Q<br> . I $G(GMVALG)="" S RESULT(1)="No Allergy Assessment"<br> . I $G(GMVALG)=0 S RESULT(1)="No Known Allergies"<br> . Q<br> S GN=1,RESULT(1)="This patient has the following allergy(ies): ",GN(1)=0 F  S GN(1)=$O(GMVALG(GN(1))) Q:GN(1)'>0  D<br> . S GN=GN+1,RESULT(GN)=$P($G(GMVALG(GN(1))),U,2)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} No Source Code Available (GMV_VitalsViewEnter.dll)  <br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}