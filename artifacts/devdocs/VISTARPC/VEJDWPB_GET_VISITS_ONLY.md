---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VEJDWPB GET VISITS ONLY<br/>
# VEJDWPB GET VISITS ONLY

This loops through the Visit file (#9000010) AA cross reference to findall visits for a patient and date range

## Properties

Property | Value
--- | ---
Label | VS
MUMPS Implementation | [VEJDVST2](http://code.osehra.org/dox/Routine_VEJDVST2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 12 | true | This is the pointer value to the Patient file
BEG | LITERAL | 14 | true | Optional - this is the starting date for the search in internal filemandate/time format of the visit.  If not passed, then a date of T-365 willbe used.
END | LITERAL | 14 | true | Optional - this is the ending date/time for the search in internal filemanformat.  If not passed, then a date of DT+.5 will be used.
ZLOC | LIST | 15 | true | Optional - you can look for visits for specific locations (file 44).  TheLC array is expected to be in the format LC(ien)&#x3D;&quot;&quot; where ien is thepointer to file 44.
CAT | LITERAL | 1 | true | This flag controls whether service categories should be screened or not.It is optional, the default value is to screen entries. I +CAT then do not screen entries.I &#x27;$G(CAT) then do not return entries whose service category is E,D,X,N,or C
VECLIN | LIST |  | true |  VECLIN is a local array which contains a list of clinics to be used to screen appointment list.  Only those appointments in these clinics will be returned.    VECLIN - optional - passed by reference    VECLIN(#) &#x3D; clinic name or ien
SCODE | LIST |  | true |  This is a list of 3-digit stop codes used to screen appointments returned.  Only those clinic locations whose stop code is in this list will be returned.     SCODE - optional - passed by reference    SCODE(#) &#x3D; 3-digit stop code (lookup on C xref)
VEDIV | LIST |  | true |  This is a list of divisions to be used to screen appointments.  Only appointments in clinics for divisions in this list will be returned.      VEDIV - optional - passed by reference     VEDIV(#) &#x3D; division name or ien



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}