---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBA CAPRI SETCONTREMARKS
# DVBA CAPRI SETCONTREMARKS

The RPC sets remarks sent to the contractor into the new word processingfield #103 of the 2507 EXAM file 396.4. The 2507 EXAMs are connected tothe 2507 REQUEST file via a pointer.

Property | Value
--- | ---
Label | WPSET
Routine | [DVBACREM](http://code.osehra.org/dox/Routine_DVBACREM_source.html)
Return Type | WORD PROCESSING


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RQID | LITERAL | 255 | true | The is the 2507 REQUEST ID from the 2507 REQUEST file 396.3. The2507 EXAMs are connected to the 2507 REQUEST file via a pointer. Theremarks sent to the contractor are stored in the new word processing field#103 of the 2507 EXAM file 396.4. 
TEXT | WORD PROCESSING | 32000 | true | The is the text from the contractor remarks. They will be stored in thenew word processing field #103 of the 2507 EXAM file 396.4
RETURN | LITERAL | 1 | true | Returns a &#x27;1&#x27; if remarks are successfully set and a &#x27;0&#x27; if the remarks arenot set.
EIEN | LIST | 512 | true | The is the 2507 EXAM ID from the 2507 EXAM file 396.4. The remarkssent to the contractor are stored in the new word processing field #103 ofthe 2507 EXAM file 396.4. The 2507 EXAMs are connected to the 2507 REQUESTfile via a pointer.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}