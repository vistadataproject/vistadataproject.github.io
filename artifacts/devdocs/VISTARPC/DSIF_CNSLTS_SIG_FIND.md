---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS SIG FIND
# DSIF CNSLTS SIG FIND

This RPC allows for Significant Findings updates to be added to a Consult. Cloned from ORQQCN SIG FIND

Property | Value
--- | ---
Label | SIGFIND
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCIEN | LITERAL |  | true | This is the Consult IEN for the consult you wish to add a significant findings update to.
DSIFSF | LITERAL | 1 | true | The flag for what type of significant finding update is being added: &#x27;Y&#x27; - Significant Finding&#x27;N&#x27; - No Significant Finding&#x27;U&#x27; - Unknown Significant Finding
DSIFCOM | LIST | 80 | true | This is array of comments being added to the Consult along with the Significant Findings update.
DSIFALRT | LITERAL | 1 | true | Flag to signal that alerts are to be sent: &#x27;N&#x27; - NO&#x27;Y&#x27; - YES
DSIFALTO | LITERAL | 80 |  | A list of comma delimited NEW PERSON FILE (200) iens who need to be alerted to the significant finding update for this consult.
DSIFDT | LITERAL |  | true | The date of the significant finding update.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}