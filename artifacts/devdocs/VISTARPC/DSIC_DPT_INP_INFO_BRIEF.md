---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC DPT INP INFO BRIEF
# DSIC DPT INP INFO BRIEF

This will return certain data related to a patient's current admission.  The data returned and the order that it is returned is controlled by the FLAG parameter.  For more detailed description, see routine INQ^DSICDPT

Property | Value
--- | ---
Label | INQ
Routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 15 | true | This is a pointer to the PATIENT file.
FLAG | LITERAL | 26 | true | This is 3 &quot;^&quot;- piece string of single character codes which dictate what data will be returned and the order that that data is returned for a patient&#x27;s current admission.  1st ^-piece - flags related to the current patient movement  2nd ^-piece - flags related to the admission movement  3rd ^-piece - flags related to the discharge movement  Default FLAG &#x3D; &quot;MDWFPpAa^MD^MD&quot;   Flag Code  Description  ---------  -----------------------------------------      M      pointer to movement (#405)      D      external movement date.time      d      internal (Fileman movement date.time)      W      external ward location      P      name of Primary Care Physician      p      DUZ of Primary Care Physician   Following only applicable to current movement      F      pointer to PTF record (#45)      R      external room-bed      A      name of ATTENDING PHYSICIAN      a      DUZ of ATTENDING PHYSICIAN      S      external FACILITY TREATING SPECIALTY (#42.4)      s      internal FACILITY TREATING SPECIALTY (#42.4)
LODGE | LITERAL | 1 | true | This boolean flag controls whether or not Lodger movements (admissions) should be included in search.  If LODGE &#x3D; 1 then return lodger movements.  Else exclude them.  Default value is 0, exclude them.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}