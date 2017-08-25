---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORCNOTE GET TOTAL<br/>
# ORCNOTE GET TOTAL



## Properties

Property | Value
--- | ---
Label | GETTOT
MUMPS Implementation | [ORCNOTE](http://code.osehra.org/dox/Routine_ORCNOTE_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETTOT^ORCNOTE](http://code.osehra.org/dox/Routine_ORCNOTE_source.html)
Method Comment | get total count of progress notes
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> ^TIU(8925,"ACLPT",3) refers to progress notes class</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORTIDT,ORTIFN<br/> S ORY=0<br/> Q:'$G(DFN)<br/> F ORTIDT=0:0 S ORTIDT=$O(^TIU(8925,"ACLPT",3,DFN,ORTIDT)) Q:ORTIDT<1  D<br/> .F ORTIFN=0:0 S ORTIFN=$O(^TIU(8925,"ACLPT",3,DFN,ORTIDT,ORTIFN)) Q:ORTIFN<1  S ORY=ORY+1<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fNotes.pas">fNotes.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}