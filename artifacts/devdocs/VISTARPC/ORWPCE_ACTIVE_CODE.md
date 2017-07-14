---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE ACTIVE CODE<br/>
# ORWPCE ACTIVE CODE



## Properties

Property | Value
--- | ---
Label | CODACTIV
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CODACTIV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Is code active on the given date?
Input Parameters | ORCODE, ORAPP, ORDATE
First Comment | {::nomarkdown}<pre><code> Remote procedure:  ORWPCE ACTIVE CODE<br/> ORCODE = ICD or CPT code to be checked<br/> ORAPP  = "ICD", "GMPX" or "CHP"<br/> ORDATE = Date to be checked (defaults to current date)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S:'+$G(ORDATE) ORDATE=DT<br/> S ORY=1<br/> I ORAPP="ICD" D  I 1<br/> . N ORI F ORI=1:1:$L(ORCODE,"/") S ORY=+$$STATCHK^ICDXCODE("DIAGNOSIS",$P(ORCODE,"/",ORI),ORDATE) Q:'ORY<br/> I ORAPP="GMPX" D  I 1<br/> . N LEX<br/> . S ORY=+$$STATCHK^LEXSRC2(ORCODE,ORDATE,.LEX)<br/> E  I ORAPP="CHP" D<br/> . S ORY=+$$STATCHK^ICPTAPIU(ORCODE,ORDATE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}