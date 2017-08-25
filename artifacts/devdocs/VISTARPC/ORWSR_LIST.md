---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWSR LIST<br/>
# ORWSR LIST

Return list of surgery cases for a patient.

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
patient id | LITERAL | 32 | true | 
BEGIN DATE | LITERAL | 16 | true | 
END DATE | LITERAL | 16 | true | 
CONTEXT | LITERAL | 8 | true | Not yet implemented.  Reserved for future use.
MAX | LITERAL | 8 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | RETURN LIST OF SURGERY CASES FOR A PATIENT
Input Parameters | ORDFN, ORBDT, OREDT, ORCTXT, ORMAX, ORFHIE
Code | {::nomarkdown}<pre><code> Q:'$$PATCH^XPDUTL("SR*3.0*100")<br/> N I,J,X,SHOWADD,SHOWDOCS<br/> S ORY=$NA(^TMP("ORLIST",$J))<br/> Q:'+ORDFN<br/> S:'$G(ORCTXT) ORCTXT=1<br/> S:'$G(ORBDT) ORBDT=""<br/> S:'$G(OREDT) OREDT=""<br/> S:'$G(ORMAX) ORMAX=""<br/> S (SHOWDOCS,SHOWADD)=1<br/> D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)<br/> S I=0<br/> F  S I=$O(@ORY@(I)) Q:+I=0  D<br/> . S X=@ORY@(I),J=0<br/> . S $P(X,U,6)=$$NON^SROESTV(+X)<br/> . S $P(X,U,14)=ORCTXT<br/> . S $P(X,U,13)=$P(X,U,5),$P(X,U,5)=""<br/> . S @ORY@(I)=X<br/> . F  S J=$O(@ORY@(I,J)) Q:+J=0  D<br/> . . S X=@ORY@(I,J)<br/> . . S:(($P(X,U,14)=ORCTXT)!($P(X,U,14)="")) $P(X,U,14)=+$P(X,U,10)<br/> . . S @ORY@(I,J)=X</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}