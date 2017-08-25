---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE CXNOSHOW<br/>
# ORWPCE CXNOSHOW



## Properties

Property | Value
--- | ---
Label | CXNOSHOW
MUMPS Implementation | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CXNOSHOW^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Should workload requirement be skipped for this note&#x27;s visit?
Input Parameters | ORDOCIEN
First Comment | {::nomarkdown}<pre><code> RETURN VALUE:  0=SKIP ALL GUI WORKLOAD REQUIREMENTS<br/>                1=CONTINUE WITH OTHER GUI WORKLOAD LOGIC</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORTIU<br/> D DOCPARM^TIUSRVP1(.ORTIU,ORDOCIEN)          ; DBIA #4331<br/> S ORY=+$$CHKWKL^TIUPXAP2(ORDOCIEN,ORTIU(0))  ; DBIA #4332<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}