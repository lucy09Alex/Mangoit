# Magento 2 KoPractice Module by Mangoit

## Overview

This is the KoPractice module for Magento 2 developed by Mangoit.

## Description

The KoPractice module provides additional functionality for practicing Knockout.js in Magento 2.

## Requirements

- PHP >= 7.4.0
- Magento/Framework >= 103.0.*

## Installation

### Composer Installation

You can install this module using Composer. Run the following commands in your Magento root directory:

```bash
composer require mangoit/ko-practice
php bin/magento module:enable Mangoit_KoPractice
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento s:s:d -f
php bin/magento c:f

