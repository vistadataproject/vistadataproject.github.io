---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EDPCBRD RPC
# EDPCBRD RPC

This RPC acts as the "front controller" for the EDIS Display Board.  It accepts requests that are initially passed into a web server.  The RPC uses the parameters that are passed in to determine which command to execute.  The returned data is formatted as XML.  The XML structure varies based a what data were requested. Since the Display Board runs in a "kiosk" mode, this RPC allows proxy user access.

Property | Value
--- | ---
Label | RPC
Routine | [EDPCBRD](http://code.osehra.org/dox/Routine_EDPCBRD_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SESS | LITERAL |  | true | This identifies the user and site that are passed in from the Java middle tier.  In cases when the display board is running with a proxy user (in kiosk mode), the SSL configuration will determine the user and site.
PARAMS | LIST |  |  | This is a list of parameters that were passed to the Java middle tier via an HTTP Post message.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}