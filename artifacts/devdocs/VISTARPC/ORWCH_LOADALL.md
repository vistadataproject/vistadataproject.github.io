---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCH LOADALL<br/>
# ORWCH LOADALL

This RPC returns the sizing related CPRS GUI chart parameters for theuser.

## Properties

Property | Value
--- | ---
Label | LOADALL
Routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LOADALL^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Method Comment | load all the sizing related paramters
Code | {::nomarkdown}<pre><code> N ORBOUNDS,ORWIDTHS,ORCOLMNS,ILST S ILST=0<br/> D GETLST^XPAR(.ORBOUNDS,DUZ_";VA(200,","ORWCH BOUNDS")<br/> D GETLST^XPAR(.ORWIDTHS,DUZ_";VA(200,","ORWCH WIDTH")<br/> D GETLST^XPAR(.ORCOLMNS,DUZ_";VA(200,","ORWCH COLUMNS")<br/> S ILST=ILST+1,LST(ILST)="~Bounds"<br/> S I="" F  S I=$O(ORBOUNDS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORBOUNDS(I)<br/> S ILST=ILST+1,LST(ILST)="~Widths"<br/> S I="" F  S I=$O(ORWIDTHS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORWIDTHS(I)<br/> S ILST=ILST+1,LST(ILST)="~Columns"<br/> S I="" F  S I=$O(ORCOLMNS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORCOLMNS(I)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fMeds.pas">fMeds.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}