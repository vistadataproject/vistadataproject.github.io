---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQBP FREF
# MAGQBP FREF

VALIDATES THAT THE FILEPATH IS CONSISTENT WITH VISTA MAGFILE REFERENCESET THE SECOND PIECE TO "PACS" IF IT REPRESENTS DICOMVALIDATES THAT A JUKEBOX POINTER EXISTSRESULT VALUES

Property | Value
--- | ---
Label | FILEREF
Routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILEPATH | LITERAL |  | true | The computer name and directory path of the file.
FILENAME | LITERAL |  | true | The filename.
FILE EXTENSION | LITERAL |  | true | The file extension.
NETWORK LOCATION | LITERAL |  | true | Current share network path being evaluated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}