---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS ADMIN COMPLETE<br/>
# DSIF CNSLTS ADMIN COMPLETE

This RPC allows for the admin completion of the selected Consult. Cloned from ORQQCN ADMIN COMPLETE

## Properties

Property | Value
--- | ---
Label | ADCOM
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCIEN | LITERAL |  | true | This is the Consult IEN that you wish to administratively complete.
DSIFFL | LITERAL | 1 | true | This is the flag that specifies whether significant findings are present during the administrative complete update. &#x27;Y&#x27; - Significant Findings&#x27;N&#x27; - No Significant Findings&#x27;U&#x27; - Unknown Significant Findings
DSIFCOM | LIST | 80 |  | This is the array of comments to be included with the administrative complete update.
DSIFRESP | LITERAL |  | true | This is the provider responsible for the action.
DSIFALRT | LITERAL | 1 | true | Flag to determine if alerts need to be sent: &#x27;N&#x27; - No&#x27;Y&#x27; - Yes
DSIFALTO | LITERAL |  |  | List of NEW PERSON FILE (200) iens, semi-colon delimited for who needs to be alerted by the updates to this consult.
DSIFDT | LITERAL |  | true | Date of the administrative complete.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}