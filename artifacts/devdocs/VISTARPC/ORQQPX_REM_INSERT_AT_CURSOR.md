---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPX REM INSERT AT CURSOR<br/>
# ORQQPX REM INSERT AT CURSOR

Returns TRUE if text generated from a reminder dialog, when processinga reminder, is to be inserted at the current cursor location, ratherthan at the bottom of the note.

## Properties

Property | Value
--- | ---
Label | INSCURS
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [INSCURS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Returns status of ORQQPX REMINDER TEXT AT CURSOR
Code | {::nomarkdown}<pre><code> N SRV,ORERR,ORTMP<br/> S ORY=0,SRV=$$GET1^DIQ(200,DUZ,29,"I")<br/> D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX REMINDER TEXT AT CURSOR","Q",.ORERR)<br/> I +ORTMP S ORY=$P($G(ORTMP(1)),U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}