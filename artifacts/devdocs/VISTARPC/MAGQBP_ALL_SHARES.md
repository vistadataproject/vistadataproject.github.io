---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQBP ALL SHARES<br/>
# MAGQBP ALL SHARES

The output of this RPC is a list of all online magnetic shares(non-routing).  This list establishes a set of roots for the purge processto downwardly traverse and evaluate the age and VistA attributes of eachimage file for the purpose of purging archaic and archived files.

## Properties

Property | Value
--- | ---
Label | ALLSHR
MUMPS Implementation | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL | 8 | true | This value is used to determine if there is a screen intended for members of the Next RAID Group.&quot;ALL&quot; performs no screen.&quot;AUTO&quot; will screen for members of the Next RAID group.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}