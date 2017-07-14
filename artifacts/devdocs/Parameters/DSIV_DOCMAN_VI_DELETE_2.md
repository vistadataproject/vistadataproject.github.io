---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; DSIV DOCMAN VI DELETE2<br/>
# DSIV DOCMAN VI DELETE2

The parameter controls whether or not the site wants the import image file deleted from the network directory by the VistA Imaging BackgroundProcessor after the BP has imported the file.  The BP will delete the file if told to do so whether or not it successfully imports the image.  The usual exception to this occurs when the BP process does not have RWD rights to the folder where the image resides.

## Properties

Property | Value
--- | ---
Summary | VistA Imaging Import Delete Flag
Value Type | free text
Value Domain | 1:240
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM
2 | DIVISION
3 | USER

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}