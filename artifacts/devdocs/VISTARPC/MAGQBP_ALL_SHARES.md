---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQBP ALL SHARES
# MAGQBP ALL SHARES

The output of this RPC is a list of all online magnetic shares(non-routing).  This list establishes a set of roots for the purge processto downwardly traverse and evaluate the age and VistA attributes of eachimage file for the purpose of purging archaic and archived files.

Property | Value
--- | ---
Label | ALLSHR
Routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL | 8 | true | This value is used to determine if there is a screen intended for members of the Next RAID Group.&quot;ALL&quot; performs no screen.&quot;AUTO&quot; will screen for members of the Next RAID group.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}