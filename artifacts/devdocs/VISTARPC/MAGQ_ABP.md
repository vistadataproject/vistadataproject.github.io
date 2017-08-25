---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ ABP<br/>
# MAGQ ABP

Provides a list of Active Background Processes.

## Properties

Property | Value
--- | ---
Label | ENTRY
MUMPS Implementation | [MAGQBTM](http://code.osehra.org/dox/Routine_MAGQBTM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
WORKSTAT | LITERAL | 30 | true | This value is the actual workstation name as specified bythe network operating system.  It is identical to the fieldin the VISTA workstation file (#2006.8) named WRKS COMPUTERNAME (#50).
PROCESS | LITERAL | 8 | true | This value is by design either &quot;B-PROC&quot; or &quot;Purge&quot; and is used to renamethe VISTA Job name on DSM systems.  This value has the last two IP octetconcatenated to it for easy identification for system management purposes.It is also displayed in the title bar of the workstation process form.of the workstation process form.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}