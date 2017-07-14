---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT APPTLST<br/>
# ORWPT APPTLST

Returns a list of appointments for a patient (for visit selection).

## Properties

Property | Value
--- | ---
Label | APPTLST
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [APPTLST^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | return a list of appointments
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> APPTTIME^LOCIEN^LOCNAME^EXTSTATUS</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ERR,ERRMSG,VASD,VAERR K ^UTILITY("VASD",$J)  ;IA 10061<br/> S VASD("F")=$$HTFM^XLFDT($H-30,1)<br/> S VASD("T")=$$HTFM^XLFDT($H+1,1)_".2359"<br/> S VASD("W")="123456789"<br/> D SDA^ORQRY01(.ERR,.ERRMSG)<br/> I ERR K ^UTILITY("VASD",$J) K LST S LST(1)=ERRMSG Q<br/> S I=0 F  S I=$O(^UTILITY("VASD",$J,I)) Q:'I  D<br/> . S LST(I)=$P(^UTILITY("VASD",$J,I,"I"),U,1,2)_U_$P(^("E"),U,2,3)<br/> K ^UTILITY("VASD",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}