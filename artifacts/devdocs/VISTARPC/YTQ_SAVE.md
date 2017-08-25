---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTQ SAVE<br/>
# YTQ SAVE

Generic proceedure to add or edit a MH file entry  Input: YS("FILEN")=File Number          (i.e. the file# for administrations would be 601.84)        YS("IEN")= : the internal number of the record you want to edit.Leave blank if creating a new record. If creating a new record you mustsend .01^NEW for those MH files using the New input transform.        YS(1)=FIELD #^Value^[3rd piece is 1 if you need to bypass             validation (use only if approved by developer)        :        :        YS(x)=YS(1)=FIELD #^Value^[3rd piece] Output: YSDATA(1)=[DATA] or [ERROR]

## Properties

Property | Value
--- | ---
Label | EDAD
MUMPS Implementation | [YTQAPI1](http://code.osehra.org/dox/Routine_YTQAPI1_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}