---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU FIELD CAN EDIT<br/>
# TIU FIELD CAN EDIT

Returns TRUE if the current user is allowed to edit template fields.

## Properties

Property | Value
--- | ---
Label | CANEDIT
MUMPS Implementation | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CANEDIT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Method Comment | Returns TRUE if the current user can edit dialog fields
Code | {::nomarkdown}<pre><code> S TIUY=0<br/> I '+DUZ Q<br/> N TIUCLASS,TIUERR,IDX,SRV<br/> S SRV=$P($G(^VA(200,DUZ,5)),U)<br/> D GETLST^XPAR(.TIUCLASS,DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","TIU FIELD EDITOR CLASSES","Q",.TIUERR)<br/> I TIUERR>0 Q<br/> S IDX=0<br/> F  S IDX=$O(TIUCLASS(IDX)) Q:'IDX  D  Q:+TIUY<br/> .I $$ISA^USRLM(DUZ,$P(TIUCLASS(IDX),U,2),.TIUERR) S TIUY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}