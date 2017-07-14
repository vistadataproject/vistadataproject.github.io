---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQBP FREF<br/>
# MAGQBP FREF

VALIDATES THAT THE FILEPATH IS CONSISTENT WITH VISTA MAGFILE REFERENCESET THE SECOND PIECE TO "PACS" IF IT REPRESENTS DICOMVALIDATES THAT A JUKEBOX POINTER EXISTSRESULT VALUES

## Properties

Property | Value
--- | ---
Label | FILEREF
Routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILEPATH | LITERAL |  | true | The computer name and directory path of the file.
FILENAME | LITERAL |  | true | The filename.
FILE EXTENSION | LITERAL |  | true | The file extension.
NETWORK LOCATION | LITERAL |  | true | Current share network path being evaluated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}