---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV ALLERGY
# GMV ALLERGY

This remote procedure call retrieves the patient's allergy information. This remote procedure call is documented in Integration Agreement 4350.

Property | Value
--- | ---
Label | ALLERGY
Routine | [GMVUTL3](http://code.osehra.org/dox/Routine_GMVUTL3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | DFN is a pointer to the PATIENT file (#2).



### MUMPS Method Description

Property | Value
--- | ---
Method | [ALLERGY^GMVUTL3](http://code.osehra.org/dox/Routine_GMVUTL3_source.html)
Method Comment | GMV ALLERGY [RPC entry point]
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N GMRAL,GMVALG,GN D EN1^GMRADPT M GMVALG=GMRAL<br/> I $O(GMVALG(0))'>0 D  Q<br/> . I $G(GMVALG)="" S RESULT(1)="No Allergy Assessment"<br/> . I $G(GMVALG)=0 S RESULT(1)="No Known Allergies"<br/> . Q<br/> S GN=1,RESULT(1)="This patient has the following allergy(ies): ",GN(1)=0 F  S GN(1)=$O(GMVALG(GN(1))) Q:GN(1)'>0  D<br/> . S GN=GN+1,RESULT(GN)=$P($G(GMVALG(GN(1))),U,2)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}