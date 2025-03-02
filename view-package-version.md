# Viewing the Version of an Installed Package

## Method 1: Using `npm list`
Run the following command in your terminal:
```bash
npm list package-name
```
Replace `package-name` with the name of the package you want to check. This will display the version of the package installed in your project.

## Method 2: Checking `package.json`
Open the `package.json` file in the root of your project directory. Look for the package name under the `dependencies` or `devDependencies` section. The version number will be listed next to the package name.

## Method 3: Using `npm view`
Run the following command in your terminal:
```bash
npm view package-name version
```
Replace `package-name` with the name of the package you want to check. This will display the version of the package available on the npm registry, which should match the installed version if you have the latest version.
