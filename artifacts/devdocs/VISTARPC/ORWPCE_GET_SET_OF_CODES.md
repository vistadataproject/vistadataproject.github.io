---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE GET SET OF CODES
# ORWPCE GET SET OF CODES

Returns values for a set of codes given a file and field number.

Property | Value
--- | ---
Label | GETSET
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETSET^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | gets set of codes
Input Parameters | ORWFILE, ORWFIELD, ORWNULL
First Comment | {::nomarkdown}<pre><code> ORWLST(n)=code^text for code</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORWPCE,ORWPCEL,ORWPCEC,ORWPCELO,ORWPCEHI,ORWPCECD,ORWPCET<br/> S ORWPCELO="abcdefghijklmnopqrstuvwxyz"<br/> S ORWPCEHI="ABCDEFGHIJKLMNOPQRSTUVWXYZ"<br/> D FIELD^DID(ORWFILE,ORWFIELD,"","POINTER","ORWPCE","ORWPCE")<br/> S ORWPCEL=$L(ORWPCE("POINTER"),";")-1<br/> F ORWPCEC=1:1:ORWPCEL D<br/> . S ORWPCECD=$P($P(ORWPCE("POINTER"),";",ORWPCEC),":",1)<br/> . S ORWPCET=$P($P(ORWPCE("POINTER"),";",ORWPCEC),":",2)<br/> . S ORWLST(ORWPCEC)=ORWPCECD_"^"_$E(ORWPCET)_$TR($E(ORWPCET,2,99),ORWPCEHI,ORWPCELO)<br/> S:$G(ORWNULL) ORWLST(0)="@^(None selected)"</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}