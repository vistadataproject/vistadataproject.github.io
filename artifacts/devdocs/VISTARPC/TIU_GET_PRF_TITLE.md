---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU GET PRF TITLE
# TIU GET PRF TITLE

Returns IEN of the TIU Note Title in file 8925.1 which is associatedwith given flag for given patient.

Property | Value
--- | ---
Label | GETTITLE
Routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PTDFN | LITERAL |  | true | Patient IEN in Patient file
FLAGID | LITERAL |  | true | The unique number for a particular Active Record Flag returned by $$GETACT^DGPFAPI.  See IA #3860.  See also GETFLAG^ORPRF.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETTITLE^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Method Comment | RPC Gets Note Title associated with FLAGID for PTDFN
Input Parameters | PTDFN, FLAGID
First Comment | {::nomarkdown}<pre><code>Receives TIUY by ref; passes back<br/> TIUY = TitleIEN^Title<br/>        0 if no title is associated or flg assignmt is not active<br/>Requires PTDFN<br/>Requires FLAGID - identifier for particular flag assignment<br/>   for patient PTDFN. Set as subscript in GETACT^DGPFAPI.<br/> See GETFLG^ORPRF.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N PRFARR K TIUY S TIUY=0<br/> Q:'$G(PTDFN)  Q:'$G(FLAGID)<br/> S TIUY=$$GETACT^DGPFAPI(PTDFN,"PRFARR") ;Get ACTive flag info<br/> Q:'TIUY<br/> S TIUY=$G(PRFARR(FLAGID,"TIUTITLE"))<br/> I TIUY'>0 S TIUY=0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fPatientFlagMulti.pas">fPatientFlagMulti.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}